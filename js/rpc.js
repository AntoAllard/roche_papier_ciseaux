 const jouer = document.querySelector(".jouer");
const rejouer = document.querySelector(".rejouer");

//Jouer
jouer.addEventListener("click", () => {
  // document.querySelector('.gameFormulaire').style.opacity = '0';
  // document.querySelector('.gameJeu').style.opacity = '100';

  const game = new Game();

  const tl = gsap.timeline({
    defaults: {
        ease: "linear"
    }
    })
      .to(".formulaire", {ease: "back.in(1)", y: "100vh", duration: 1})
      .to(".gameFormulaire", {
        opacity: 0,
        onComplete: () => document.querySelector(".gameFormulaire").classList.add("invisible")})
    
})

//Rejouer
rejouer.addEventListener("click", () =>{
  // document.querySelector('.gameFormulaire').style.opacity = '100';
  // document.querySelector('.gameJeu').style.opacity = '0';

  const tl = gsap.timeline({
    defaults: {
        ease: "linear"
    }
    })
    .to(".gameFormulaire", {
      onStart: () => document.querySelector(".gameFormulaire").classList.remove("invisible"),
      opacity: 1})
      .to(".formulaire", {ease: "back.out(1)", y: "100vh", duration: 1,})

})
      

//Game
class Game {
    constructor() {
      
      this.listArmes = [
            ["✊", "✋", "✌️"],
            ["✊🏻", "✋🏻", "✌🏻"],
            ["✊🏽", "✋🏽", "✌🏽"],
            ["✊🏿", "✋🏿", "✌🏿"],
        ];
      
        this.affChoixJoueur();
        this.affNomJoueur();
        this.affChoixCpu();
        this.affResultat();
    }
    
    affNomJoueur() {
      const nom_formulaire = document.querySelector('.nomTexte').value;
      const nom_en_jeu = document.querySelector('.participant');
      nom_en_jeu.innerHTML = nom_formulaire;
    }

    affChoixJoueur(){
      const choixPeauList = document.querySelector('[name = choixPeau]:checked').value;
      this.choixArmeList = document.querySelector('[name = armes]').value;
      
      const couleurPeauJoueur = this.listArmes[choixPeauList];
      const armeJoueur = couleurPeauJoueur[this.choixArmeList];
      
      
      const resultatJoueur = document.querySelector(".emojiJoueur");
      resultatJoueur.innerHTML = armeJoueur;
    }

    affChoixCpu() {
      
      const couleurRandom = Math.round( Math.random() * 3 );
      const couleurCpu = this.listArmes[couleurRandom];

      
      this.actionRandom = Math.round( Math.random() * 2 );
      const actionCpu = couleurCpu[this.actionRandom];
      

      
      const resultatCpu = document.querySelector(".emojiCPU");
      resultatCpu.innerHTML = actionCpu;
    }
  
    affResultat() {

      const coteJoueur = document.querySelector(".joueur");
      const coteCpu = document.querySelector(".computer");
      const resultat = document.querySelector(".annonce");
      console.log(this.choixArmeList,this.actionRandom)


      if(this.choixArmeList == this.actionRandom) {
          coteJoueur.style.setProperty("background-color", "#3F88C5");
          coteCpu.style.setProperty("background-color", "#3F88C5");
          resultat.innerHTML = "Égalité !";
      }

      else if(
          this.choixArmeList == 0 && this.actionRandom == 1 ||
          this.choixArmeList == 1 && this.actionRandom == 2 ||
          this.choixArmeList == 2 && this.actionRandom == 0 ) {
              coteJoueur.style.setProperty("background-color", "#D16D82");
              coteCpu.style.setProperty("background-color", "#7FD8BE");
              resultat.innerHTML = "Défaite ...";
          }

      else {
          coteJoueur.style.setProperty("background-color", "#7FD8BE");
          coteCpu.style.setProperty("background-color", " #D16D82");
          resultat.innerHTML = "Victoire !!!";
      }
    }
}