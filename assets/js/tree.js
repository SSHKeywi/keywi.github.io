// === assets/js/tree.js ===
document.addEventListener("DOMContentLoaded", () => {
  // 1) Sélection du conteneur et dimensions
  const container = d3.select("#treeContainer");
  const W = container.node().clientWidth  || window.innerWidth;
  const H = container.node().clientHeight || window.innerHeight;
  const margin = { top: 20, right: 90, bottom: 20, left: 90 };
  const width  = W - margin.left - margin.right;
  const height = H - margin.top  - margin.bottom;

  // 2) Données hiérarchiques 
  const data = {
    name: "Keywi",
    logo: "assets/img/kiwi-slice.png",
    children: [
      {
        name: "Profil & Plateformes",
        children: [
          { name: "GitHub",    popup: "githubPopup",    logo: "assets/img/github.png" },
          { name: "LinkedIn",  popup: "linkedinPopup",  logo: "assets/img/linkedin.png" },
          { name: "TryHackMe", popup: "tryhackmePopup", logo: "assets/img/tryhackme.png" },
          { name: "RootMe",    popup: "rootmePopup",    logo: "assets/img/rootme.png" }
        ]
      },
      {
        name: "Compétences Techniques",
        children: [
          {
            name: "Cybersécurité",
            children: [
              { name: "Nmap",            popup: "nmapPopup",        logo: "assets/img/nmap.png" },
              { name: "Shodan",          popup: "shodanPopup",      logo: "assets/img/shodan.png" },
              { name: "Wireshark",       popup: "wiresharkPopup",   logo: "assets/img/wireshark.png" },
              { name: "Metasploit",      popup: "metasploitPopup",  logo: "assets/img/metasploit.png" },
              { name: "Burp Suite",      popup: "burpsuitePopup",   logo: "assets/img/burpsuite.png" },
              { name: "Cortex XSOAR",     popup: "cortexPopup",      logo: "assets/img/cortex.png" },
              { name: "CrowdStrike",     popup: "crowdstrikePopup", logo: "assets/img/crowdstrike.png" },
              { name: "PfSense",         popup: "pfsensePopup",      logo: "assets/img/pfsense.png" },
              { name: "Ansible",         popup: "ansiblePopup",      logo: "assets/img/ansible.png" },
            ]
          },
          { name: "Frameworks & Normes",
            children: [
              { name: "MITRE ATT&CK", popup: "mitrePopup", logo: "assets/img/mitre.png" },
              { name: "OWASP Top 10",    popup: "owaspPopup",    logo: "assets/img/owasp.png" },
              { name: "ISO/IEC 27001",   popup: "iso27001Popup", logo: "assets/img/iso27001.png" },
              { name: "ITIL",            popup: "itilPopup",     logo: "assets/img/itil.png" }
            ]
          },
          {
            name: "Développement & Scripting",
            children: [
              { name: "Python",      popup: "pythonPopup",      logo: "assets/img/python.png" },
              { name: "Bash",        popup: "bashPopup",        logo: "assets/img/bash.png"   },
              { name: "PowerShell",  popup: "psPopup",          logo: "assets/img/powershell.png" },
              { name: "JavaScript",  popup: "jsPopup",          logo: "assets/img/javascript.png" },
              { name: "C++",         popup: "cppPopup",         logo: "assets/img/cpp.png"   },
              { name: "Unity",       popup: "unityPopup",       logo: "assets/img/unity.png" }
            ]
          },
          {
            name: "Virtualisation & Cloud",
            children: [
              { name: "Docker", popup: "dockerPopup", logo: "assets/img/docker.png" },
              { name: "VMware", popup: "vmwarePopup", logo: "assets/img/vmware.png" },
              { name: "Proxmox", popup: "proxmoxPopup", logo: "assets/img/proxmox.png" }
            ]
          },
          {
            name: "Versioning & CI/CD",
            children: [
              { name: "Git",       popup: "gitPopup",     logo: "assets/img/git.png"     },
              { name: "GitLab",    popup: "gitlabPopup",  logo: "assets/img/gitlab.png" },
              { name: "Forgejo",   popup: "forgejoPopup", logo: "assets/img/forgejo.png" }
            ]
          },
          {
            name: "3D Modélisation & Impression",
            children: [
              { name: "Fusion 360",  popup: "fusionPopup", logo: "assets/img/fusion360.png" },
              { name: "PrusaSlicer", popup: "prusaPopup",  logo: "assets/img/prusa.png"     },
              { name: "Blender",     popup: "blenderPopup", logo: "assets/img/blender.png"  }
            ]
          },
          {
            name: "Gestion & Documentation",
            children: [
              { name: "Markdown",   popup: "mdPopup",   logo: "assets/img/markdown.png" },
              { name: "JIRA",       popup: "jiraPopup", logo: "assets/img/jira.png"     },
              { name: "Confluence", popup: "confPopup", logo: "assets/img/confluence.png" },
              { name: "Obsidian",   popup: "obsidianPopup", logo: "assets/img/obsidian.png" },          
              { name: "Notion",     popup: "notionPopup",   logo: "assets/img/notion.png"   },
              { name: "Trello",     popup: "trelloPopup",   logo: "assets/img/trello.png"   }
            ]
          },
          {
            name: "Design & Graphisme",
            children: [
              { name: "Figma",       popup: "figmaPopup",    logo: "assets/img/figma.png" },
              { name: "Photoshop",   popup: "photoshopPopup", logo: "assets/img/photoshop.png" },
              { name: "Illustrator", popup: "illustratorPopup", logo: "assets/img/illustrator.png" }
            ]
          }
        ]
      },
      {
        name: "Soft Skills",
        children: [
          { name: "Communication",     popup: "communicationPopup", logo: "assets/img/communication.png" },
          { name: "Teamwork",          popup: "teamworkPopup",      logo: "assets/img/teamwork.png"      },
          { name: "Adaptabilité",      popup: "adaptabilityPopup",  logo: "assets/img/adaptability.png"  },
          { name: "Gestion de Projet", popup: "pmPopup",            logo: "assets/img/pm.png"            }
        ]
      },
      {
        name: "Langues",
        children: [
          { name: "Français",  popup: "frenchPopup",     logo: "assets/img/french.png"     },
          { name: "Anglais",   popup: "englishPopup",    logo: "assets/img/english.png"    },
          { name: "Portugais", popup: "portuguesePopup", logo: "assets/img/portuguese.png" }
        ]
      },
      {
        name: "Certifications",
        children: [
          { name: "PJPT", popup: "pjptPopup", logo: "assets/img/pjpt.png" },
          { name: "CCNAv7", popup: "ccnav7Popup", logo: "assets/img/ccnav7.png" },
        ]
      }
    ]
  };
  
  
  

  // 3) Hiérarchie & layout
  const root = d3.hierarchy(data);
  root.x0 = height / 2;
  root.y0 = width  / 2;
  const treeLayout = d3.tree().size([height, width]);

  // 4) SVG + defs
  const svg = container.append("svg")
      .attr("width",  W)
      .attr("height", H)
    .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

  const defs = svg.append("defs");

  // Gradient radial pour les nœuds
  defs.append("radialGradient").attr("id","nodeGradient")
    .selectAll("stop")
    .data([
      { offset: "0%",   color: "var(--main-color)" },
      { offset: "100%", color: "rgba(177,149,73,0.6)" }
    ]).join("stop")
      .attr("offset",     d => d.offset)
      .attr("stop-color", d => d.color);

  // Filtre glow
  const fltGlow = defs.append("filter").attr("id","glow");
  fltGlow.append("feGaussianBlur").attr("stdDeviation", 4.5).attr("result", "coloredBlur");
  fltGlow.append("feMerge")
    .selectAll("feMergeNode")
    .data(["coloredBlur","SourceGraphic"])
    .join("feMergeNode")
      .attr("in", d => d);

  // Filtre glitch
  const fltGlitch = defs.append("filter").attr("id","glitch");
  fltGlitch.append("feTurbulence")
    .attr("type","fractalNoise")
    .attr("baseFrequency",0.08)
    .attr("numOctaves",1)
    .attr("result","noise");
  fltGlitch.append("feDisplacementMap")
    .attr("in","SourceGraphic")
    .attr("in2","noise")
    .attr("scale",10)
    .attr("xChannelSelector","R")
    .attr("yChannelSelector","G");

  // clipPath circulaire pour l'image
  defs.append("clipPath")
    .attr("id", "clipCircle")
    .attr("clipPathUnits", "objectBoundingBox")
    .append("circle")
      .attr("cx", 0.5).attr("cy", 0.5).attr("r", 0.5);

  // Hint initial
  svg.append("text")
    .attr("class", "hint")
    .attr("x", root.y0)
    .attr("y", root.x0 - 60)     
    .attr("text-anchor", "middle")
    .style("font-size", "24px")
    .style("fill", "var(--main-color)")
    .text("Ouvre moi");

  // 5) Collapse récursif
  function collapse(node) {
    if (node.children) {
      node._children = node.children;
      node._children.forEach(collapse);
      node.children = null;
    }
  }
  collapse(root);

  // compteur d'IDs
  let idCounter = 0;

  // 6) Premier rendu
  update(root);

  // 7) Fonction update
  function update(source) {
    const treeData = treeLayout(root);
    const nodes    = treeData.descendants();
    const links    = treeData.links();

    // Positions
    nodes.forEach(d => {
      if (d.depth === 0 && d._children) {
        d.x = root.x0; d.y = root.y0;
      } else {
        d.y = d.depth * 240;
      }
    });

    // Nœuds
    const node = svg.selectAll("g.node")
      .data(nodes, d => d.id || (d.id = ++idCounter));

    const nodeEnter = node.enter().append("g")
        .attr("class","node")
        .attr("transform", d => `translate(${source.y0},${source.x0})`)
        .on("click", onClick);

    nodeEnter.each(function(d) {
      const g = d3.select(this);
      if (d.data.logo) {
        g.append("circle").attr("class","logo-bg")
          .attr("r", d.depth === 0 ? 28 : 22);
        g.append("image").attr("class","node-logo")
          .attr("xlink:href", d.data.logo)
          .attr("width",  d.depth === 0 ? 56 : 44)
          .attr("height", d.depth === 0 ? 56 : 44)
          .attr("x",      d.depth === 0 ? -28 : -22)
          .attr("y",      d.depth === 0 ? -28 : -22)
          .attr("clip-path", "url(#clipCircle)");
      } else {
        g.append("circle").attr("class","node-circle")
          .attr("r", 1e-6)
          .style("fill", d => d._children ? "var(--main-color)" : "url(#nodeGradient)");
      }
    });

    nodeEnter.append("text")
      .attr("x", d => d.data.logo ? (d.depth===0 ? 35 : 30) : 20)
      .attr("dy", "0.35em")
      .text(d => d.data.name)
      .style("fill-opacity", 1e-6);

    const nodeUpdate = nodeEnter.merge(node);
    nodeUpdate.transition().duration(300)
      .attr("transform", d => `translate(${d.y},${d.x})`);
    nodeUpdate.select("circle.logo-bg")
      .attr("r", d => d.depth === 0 ? 28 : 22);
    nodeUpdate.select("image.node-logo")
      .attr("width",  d => d.depth === 0 ? 56 : 44)
      .attr("height", d => d.depth === 0 ? 56 : 44)
      .attr("x",      d => d.depth === 0 ? -28 : -22)
      .attr("y",      d => d.depth === 0 ? -28 : -22);
    nodeUpdate.select("circle.node-circle")
      .attr("r", d => d.depth===0 ? 25 : 15);
    nodeUpdate.select("text")
      .style("fill-opacity", 1)
      .attr("x", d => d.data.logo ? (d.depth===0 ? 35 : 30) : 20);

    node.exit().transition().duration(300)
        .attr("transform", d => `translate(${source.y},${source.x})`)
        .remove();

    // Liens
    const link = svg.selectAll("path.link")
      .data(links, d => d.target.id);

    const linkEnter = link.enter().insert("path","g")
      .attr("class","link")
      .attr("d", () => {
        const o = { x: source.x0, y: source.y0 };
        return diagonal({ source: o, target: o });
      });

    linkEnter.merge(link)
      .transition().duration(300)
        .attr("d", diagonal)
        .attr("filter", "url(#glitch)")
      .select(function() { return this; })
        .attr("stroke-dasharray", "8,4")
        .attr("stroke-dashoffset", 0)
      .transition().duration(2000).ease(d3.easeLinear)
        .attrTween("stroke-dashoffset", () => d3.interpolate(0,12))
        .on("end", function repeat() {
          d3.select(this)
            .attr("stroke-dashoffset", 0)
            .transition().duration(2000).ease(d3.easeLinear)
            .attrTween("stroke-dashoffset", () => d3.interpolate(0,12))
            .on("end", repeat);
        });

    link.exit().transition().duration(300)
      .attr("d", _d => {
        const o = { x: source.x, y: source.y };
        return diagonal({ source: o, target: o });
      })
      .remove();

    // Mémoriser positions
    nodes.forEach(d => { d.x0 = d.x; d.y0 = d.y; });
    svg.selectAll("g.node").raise();
  }

  // Bézier
  function diagonal(d) {
    return `M${d.source.y},${d.source.x}
            C${(d.source.y + d.target.y)/2},${d.source.x}
             ${(d.source.y + d.target.y)/2},${d.target.x}
             ${d.target.y},${d.target.x}`;
  }

  // Interaction
  function onClick(_event, d) {
    d3.select(".hint").remove();
    if (d.children) {
      d._children = d.children; d.children = null;
    } else {
      d.children = d._children; d._children = null;
    }
    update(d);
    if (d.data.popup) openPopup(d.data.popup);
  }
});
