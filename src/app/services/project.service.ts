import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  
  private projects: Project[];

  constructor(private sanitizer: DomSanitizer) {

    this.projects = [
    {
      id: 'ball-blaze',
      title: 'Ball Blaze',
      videoPath: {
        isIframe: true, 
        path: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.youtube.com/embed/WSp8GvMaYyA'
        ),
      },
      description: `
      <h3>Game</h3>
      <p>
        &emsp; A neon style, golf like game, where the player has to put objects in the environment so the ball reaches the
        hole in one strike.
      </p>
      <h3>My Contributions</h3>
      <p>
        &emsp; In this one week university project, we were a team of 6. I made a continuous 2D physics system that
        implemented ball, rectangle and line
        colliders. It was the result of a month of studying. I learned about what is and when to use the dot product, how to
        get the normal of a
        surface, some edge cases of collisions such as how to counteract the floating point error or sticky physics.
        <br>
        &emsp;Also, I made a working scene manager and a designer friendly interface through <span><a
            href="https://www.mapeditor.org/" target="_blank">Tiled</a></span>.
        I added a prefab system, so we don't have to hard code the data of objects, but rather create it in Tiled and clone it
        everytime we want an instance.

      </p>
      <h3>Soft Skills Development</h3>
      <p>
        &emsp;I was the scrum master and used <span><a href="https://hacknplan.com/">HacknPlan</a></span> (a planning tool) to
        give each team member tasks that we agreed on as a team.
        The mechanics were all planed out in advance. We did user research and analyzed different puzzle games. We also had a
        brainstorming session after which we had
        three prototypes. We tested each prototype and picked the best one based on feedback. After, our designers worked on
        the Game Design Document and the artists drew concept
        art. Meanwhile, I was working on the prefab system and the physics system. When the GDD was almost done, we started
        implementing everything.
        <br>
        &emsp; Probably the biggest problem we had was that we did so well, that we didn't know if we wanted to add more
        content or improve the current ones.
        At the end, we decided to add more content such as levels, backgrounds, sounds, and a website.
      </p>
      `,
      timeSpent: '3 weeks',
      githubLink: 'https://github.com/birkaQtrilka/FinalAproach',
      credits: [
        { name: 'Designer', link: 'https://www.linkedin.com/in/lluis-alguersuari-4831562b9/', linkLabel: 'Lluis Alguersuari' },
        { name: 'Designer', link: 'https://linkedin.com/in/george-didenko-b1b37128b', linkLabel: 'George Didenko' },
        { name: 'Artist', link: 'https://www.linkedin.com/in/andy-tandareanu-9866392ba/', linkLabel: 'Andy Tandareanu' },
        { name: 'Artist', link: 'https://www.linkedin.com/in/nicola-cristea-4a58122a0/', linkLabel: 'Nicola Cristea' },
        { name: 'Engineer', link: 'https://www.linkedin.com/in/ilia-nevrov-3a9934233/', linkLabel: 'Ilia Nevrov' }
      ]
    },
    {
  id: 'procedural-generation',
  title: 'Procedural Generation',
  videoPath: {
    isIframe: true,
    path: this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/DZ5OSu2idMM?si=xpWqPIWNGzoO9sC_'
    ),
  },
  description: `
    <p>
      &emsp; An extension of the previous wave function collapse projects, in which I made a space
      partitioning algorithm. It is used to divide neighbourhoods that have random shapes into
      rectangles (houses). Each neighbourhood is a "cluster" that can have different generation 
      settings (e.g. having differently colored buildings).
      <br>&emsp; Another addition was the procedural building generator. It was my introduction to
      generation grammar.
      <br>&emsp; The main challenges were separating the logic from the visuals and creating extensive
      debugging tooling while programming the space partitioning algorithm.
    </p>
  `,
  timeSpent: '2 weeks',
  githubLink: 'https://github.com/birkaQtrilka/Grammar',
  credits: [
    {
      name: 'Artist',
      link: 'https://www.linkedin.com/in/kim-van-der-tang-74ba94213/',
      linkLabel: 'Kim Van Der Tang'
    }
  ]
},
{
  id: 'procedural-planets',
  title: 'Procedural Planets',
  videoPath: {
    isIframe: true,
    path: this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/xWtM5TTlcCg?si=SP-D82S2Abjb2Z7v'
    ),
  },
  description: `
    <p>
      &emsp; A continuation of Sebastian Lague's 
      <a href="https://www.youtube.com/watch?v=QN39W020LqU&list=PLFt_AvWsXl0cONs3T0By4puYy6GM22ko8" target="_blank">
        procedural planet generation tutorial
      </a>.  
      In this project, I learned how to create meshes in code by making an ocean mesh that follows the contour of the
      planet's land. My solution was to implement the 
      <a href="https://en.wikipedia.org/wiki/Marching_squares" target="_blank">marching squares algorithm</a>.
      You divide the mesh into squares and give the corners a value based on how close they are to the ocean level.  
      Then, using the lookup table of all possible cell configurations, you determine the correct mesh shape and
      interpolate the vertices.
      <br>&emsp;The main challenge was understanding how mesh generation works and finding the right solution.
      I stumbled upon the marching squares algorithm and realized I could use it for this project. Implementing it was 
      difficult, but also a lot of fun.
    </p>
  `,
  timeSpent: '2 months',
  // downloadLink: '/css/Downloadables/Planets.zip',
  githubLink: 'https://github.com/birkaQtrilka/Cosmic-Surviver/blob/master/Assets/Scripts/OceanFace.cs',
  credits: [
    {
      name: 'Inspiration and code snippets',
      link: 'https://www.youtube.com/watch?v=QN39W020LqU&list=PLFt_AvWsXl0cONs3T0By4puYy6GM22ko8',
      linkLabel: 'Sebastian Lague'
    }
  ]
},
{
  id: 'networking',
  title: 'Networking',
  videoPath: {
    isIframe: false,
    path: '/assets/videos/Netw.mp4'
  },
  description: `
    <p>
      &emsp; A checkers game you can run on LAN that can handle more than one match at a time.
      The networking system is made using C# sockets (TCP clients) and the BitConverter.
      <br>&emsp; The format is object-based: every message inherits the IMessage interface, which contains
      the data and uses the Packet class to read and write data in the correct order.
      <br>&emsp; The Packet class handles serialization and deserialization. It first reads/writes the hash
      of the IMessage subclass from the network stream, then calls methods that read/write their data.
      <br>&emsp; A heartbeat system automatically disconnects clients or the server if there is no response
      after a few seconds.
      <br>&emsp; Packets also check the last message sent through the network so they can reuse the same byte array.
    </p>
  `,
  timeSpent: '3 weeks',
  downloadLinks: [
    { label: 'Download Server Build', path: '/assets/Downloadables/CheckersServer.zip' },
    { label: 'Download Client Build', path: '/assets/Downloadables/CheckersClient.zip' }
  ],
  githubLink: 'https://github.com/birkaQtrilka/Networked-Checkers',
  credits: [
    {
      name: 'Set-up code made by',
      link: 'https://www.linkedin.com/in/hanswichman/',
      linkLabel: 'Hans Whichman'
    }
  ]
},
{
  id: 'cpp-projects',
  title: 'C++ Projects',
  videoPath: {
    isIframe: false,
    path: '/assets/videos/cppProjects.mp4'
  },
  description: `
    <p>
      &emsp; These are the C++ projects I worked on during my studies. In the video you can see the
      order of development, starting with a simple I/O project where I learned how to make a save system.
      Then I learned the basics of 3D rendering with OpenGL, creating a simple engine that can render
      3D models with textures and lighting.
      <br>&emsp; My main challenge was learning how to use OpenGL. Binding elements, VBOs, parallel
      programming were relatively new concepts, so I had to spend time reading documentation and tutorials.
    </p>
  `,
  timeSpent: '8 weeks',
  credits: [] // no credits in original
},
{
  id: 'front-end',
  title: 'Front End',
  videoPath: {
    isIframe: false,
    path: '/assets/videos/VueWebsiteDEMO.mp4'
  },
  description: `
    <p>
      &emsp; A house listing web application made with Vue.js and Vuex. It uses a mock API to fetch
      the data.
      <br>&emsp; The application has mobile and desktop versions and is responsive. The mobile version differs
      not only in layout but also in functionality, using a bottom navigation bar and images instead of text
      for navigation buttons.
      <br>&emsp; It includes a search bar that filters houses by name, and a filter that sorts them by
      price and size.
      <br>&emsp; The main challenge was separating the code into conceptual segments, making it easier to
      read and maintain.
    </p>
  `,
  timeSpent: '36 hours',
  githubLink: 'https://github.com/birkaQtrilka/vue-start-spa',
  credits: [
    {
      name: 'Assets and API',
      link: 'https://www.d-tt.nl/en/',
      linkLabel: 'D-TT'
    }
  ]
},
{
  id: 'internship-tible',
  title: 'Internship at Tible',
  videoPath: {
    isIframe: false,
    path: '/assets/videos/VueWebsiteDEMO.mp4' // same as original
  },
  description: `
    <p>
      &emsp; During this internship I was responsible for the front-end of a dashboard application.
      It was made for Statiegeld Nederland, a Dutch organization that promotes the return of bottles
      and cans. The web app was built with Angular and TypeScript. It features data visualization with
      charts and graphs, user authentication, and data filtering using custom form fields.
      <br>&emsp; The main challenge was working with an existing codebase and learning new technologies
      in a short period of time. I had to learn Jira, Confluence, Jenkins, Spring Boot, and other tools
      used in the company.
    </p>
  `,
  timeSpent: '6 months',
  credits: [
    {
      name: 'The company website',
      link: 'https://tible.com/en',
      linkLabel: 'Tible.com'
    }
  ]
},
{
  id: 'unity-editor',
  title: 'Unity Editor',
  videoPath: {
    isIframe: true,
    path: this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/fxm84SgOHKQ?si=7dpSixjv1GXwiqsv'
    )
  },
  description: `
    <h3>Product</h3>
    <p>
      &emsp; I made a Unity tool that allows you to spawn worlds through the wave function collapse
      algorithm. It's a scriptable object with a custom editor in which you can add tiles with varying
      socket types.
    </p>
    <h3>My Contributions</h3>
    <p>
      &emsp; In this project, I learned how to use the Unity editor API and how to decouple data and
      behavior. I also learned about serialized properties and how to save data changed in the editor.
      <br>&emsp; The main challenge was serializing the data and saving it after every change. The editor
      also has some performance issues that I still need to solve.
    </p>
  `,
  timeSpent: '1 week',
  downloadLinks: [{label:'Download the Unity Editor Tool', path: '/assets/Downloadables/UnityEditorTool.zip'}],
  githubLink: 'https://github.com/birkaQtrilka/LearningEditor',
  credits: [
    {
      name: 'Solo development',
      link: '',
      linkLabel: ''
    }
  ]
}



  ];
}


  getProject(id: string): Project | undefined {
    return this.projects.find(p => p.id === id);
  }

  getAllProjects(): Project[] {
    return this.projects;
  }
}