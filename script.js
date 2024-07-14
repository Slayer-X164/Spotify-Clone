const music = new Audio("songs/shape.mp3");

const songs = [
  {
    id: "1",
    songName: ` shape of you <br />
 <div class="subtitle">ed sheeran</div>`,
    poster: "music images/shape of you.png",
  },
  {
    id: "2",
    songName: ` fifty fifty <br />
 <div class="subtitle">cupid</div>`,
    poster: "music images/cupid.png",
  },
  {
    id: "3",
    songName: ` sorry <br />
 <div class="subtitle">justin bieber</div>`,
    poster: "music images/sorry jb.png",
  },
  {
    id: "4",
    songName: ` roar <br />
 <div class="subtitle">katy perry</div>`,
    poster: "music images/roar.jpg",
  },
  {
    id: "5",
    songName: ` despacito <br />
 <div class="subtitle">luis fonsi</div>`,
    poster: "music images/despacito.png",
  },
  {
    id: "6",
    songName: ` mi amor <br />
 <div class="subtitle">sharn</div>`,
    poster: "music images/mi amor.jpg",
  },
  {
    id: "7",
    songName: ` counting <br />
 <div class="subtitle">one republic</div>`,
    poster: "music images/onerepublic.jpeg",
  },
];

let masterPlay = document.getElementById("masterPlay");

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    masterPlay.classList.remove("bi-play-circle");
    masterPlay.classList.add("bi-pause-fill");
  } else {
    music.pause();
    masterPlay.classList.add("bi-play-circle");
    masterPlay.classList.remove("bi-pause-fill");
  }
});

let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let title = document.getElementById("title");
Array.from(document.getElementsByClassName("playlistPlay")).forEach((e) => {
  e.addEventListener("click", (el) => {
    index = el.target.id;
    console.log(index);
    music.src = `songs/${index}.mp3`;
    poster_master_play.src = `music images/${index}.png`;
    music.play();
    masterPlay.classList.remove("bi-play-circle");
    masterPlay.classList.add("bi-pause-fill");

    let songTitles = songs.filter((els) => {
      return els.id == index;
    });

    songTitles.forEach((elss) => {
      let { songName } = elss;
      title.innerHTML = songName;
    });
  });
});
