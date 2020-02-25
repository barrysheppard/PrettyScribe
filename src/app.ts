/*
    Copyright 2020 Rick Weyrauch,

    Permission to use, copy, modify, and/or distribute this software for any purpose 
    with or without fee is hereby granted, provided that the above copyright notice
    and this permission notice appear in all copies.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH 
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND 
    FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, 
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS 
    OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER 
    TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE 
    OF THIS SOFTWARE.
*/

import { Create40kRoster } from "./roster40k";
import { Renderer40k } from "./renderer40k";
import { CreateAoSRoster } from "./rosterAoS";
import { RendererAoS } from "./rendererAoS";
import { CreateWarcryRoster } from "./rosterWarcry";
import { RendererWarcry } from "./rendererWarcry";
import JSZip from 'jszip';

function cleanup(): void {
  $('#roster-title').empty();
  $('#roster-lists').empty();
  $('#force-units').empty();
}

function getFileExtension(filename: string): string {
  const substrings = filename.split('.');
  if (substrings.length > 1) {
    return substrings[substrings.length-1].toLowerCase();
  }
  return "";
}

function parseXML(xmldata: string) {
  let parser = new DOMParser();
  let doc = parser.parseFromString(xmldata, "text/xml");

  if (doc) {
    // Determine roster type (game system).
    let info = doc.querySelector("roster");
    if (info) {
      const gameType = info.getAttributeNode("gameSystemName")?.nodeValue;
      if (!gameType) return;

      const rosterTitle = $('#roster-title')[0];
      const rosterList = $('#roster-lists')[0];
      const forceUnits = $('#force-units')[0];

      if (gameType == "Warhammer 40,000 8th Edition") {
        let roster = Create40kRoster(doc);
        if (roster) {
          if (roster._forces.length > 0) {
            const renderer: Renderer40k = new Renderer40k(roster);
            renderer.render(rosterTitle, rosterList, forceUnits);
          }
        }
      }
      else if (gameType == "Warhammer 40,000: Kill Team (2018)") {
        //alert("Kill Team not supported yet.");
        let roster = Create40kRoster(doc, false);
        if (roster) {
          if (roster._forces.length > 0) {
            const renderer: Renderer40k = new Renderer40k(roster);
            renderer.render(rosterTitle, rosterList, forceUnits);
          }
        }
      }
      else if (gameType == "Age of Sigmar") {
        let roster = CreateAoSRoster(doc);
        if (roster) {
          const renderer: RendererAoS = new RendererAoS(roster);
          renderer.render(rosterTitle, rosterList, forceUnits);
        }
      }
      else if (gameType == "Warhammer Age of Sigmar: Warcry") {
        let roster = CreateWarcryRoster(doc);
        if (roster) {
          const renderer: RendererWarcry = new RendererWarcry(roster);
          renderer.render(rosterTitle, rosterList, forceUnits);
        }
      }
      // TODO: add support for 30k and Apocalypse
      // else if ((gameType == "Warhammer 30,000 - The Horus Heresy") ||
      //          (gameType == "Warhammer 40,000: Apocalypse")) {
      //   let roster = Create40kRoster(doc);
      //   if (roster) {
      //     if (roster._forces.length > 0) {
      //       const renderer: Renderer40k = new Renderer40k(roster);
      //       renderer.render(rosterTitle, rosterList, forceUnits);
      //     }
      //   }
      // }
      else {
          $('#errorText').html('PrettyScribe does not support game type \'' + gameType + '\'.');
          $('#errorDialog').modal();    
      }
    }
  }
}

$('#roster-file').on("change", function handleFileSelect(event: Event) {
  const input = event.target as HTMLInputElement;
  const files = input.files;

  cleanup();

  if (files) {
    // files is a FileList of File objects. List some properties.
    let output = [];
    for (let f of files) {

      const fileExt = getFileExtension(f.name);
      if (fileExt === "rosz" || fileExt.length === 0) {
        let zip = new JSZip();
        zip.loadAsync(f).then(function(zip) {
          zip.forEach(function(path, file) {
            file.async("string").then(function(xmldata) {
              parseXML(xmldata);
            });
          })
        }).catch(function(reason) {
          $('#errorText').html('Failed to load compressed roster file, ' + f.name + ', reason ' + reason);
          $('#errorDialog').modal();  
        });
      }
      else if (fileExt === "ros") {
        const reader = new FileReader();
        reader.onload = function (e) {
          const re = e.target;
          if (re && re.result) {
            let sourceData = re.result;
            // Skip encoding tag
            const xmldatastart = sourceData.toString().indexOf(',') + 1;
            const xmldata = window.atob(sourceData.toString().slice(xmldatastart));
            parseXML(xmldata);
          }
        }
        reader.readAsDataURL(f);
      }
      else {
        $('#errorText').html('PrettyScribe only supports .ros and .rosz files.  Selected file is a \'' + fileExt + "\' file.");
        $('#errorDialog').modal();
      }
    }
  }
});
