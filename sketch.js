// Définir la densité des caractères pour l'ASCII art
const density = '123@#W$?!abc;:+=-,._';

let video; // Variable pour stocker l'objet vidéo
let playing = false; // Variable pour suivre l'état de lecture de la vidéo
let frameCount = 0; // Compteur de frames pour contrôler la fréquence de mise à jour

// Fonction preload pour charger la vidéo avant le démarrage du sketch
function preload() {
  video = createVideo("YOURVIDEO.mp4"); // Charger la vidéo
}

function setup() {
  createCanvas(500, 500); // Créer une zone de dessin de 500x500 pixels
  background(0); // Définir le fond en noir
  video.size(100, 100); // Réduire la résolution de la vidéo pour faciliter le calcul
  video.hide(); // Cacher la vidéo d'origine pour ne pas l'afficher directement

  // Créer un bouton pour démarrer/arrêter la vidéo
  let button = createButton('Play Video');
  button.mousePressed(toggleVid); // Attacher une fonction au clic du bouton
}

// Fonction pour démarrer/arrêter la lecture de la vidéo
function toggleVid() {
  if (playing) {
    video.pause(); // Mettre en pause la vidéo si elle est en lecture
  } else {
    video.loop(); // Jouer la vidéo en boucle
    video.play(); // Démarrer la lecture de la vidéo
  }
  playing = !playing; // Inverser l'état de lecture
}

function draw() {
  background(0); // Redéfinir le fond en noir à chaque frame

  // Mettre à jour l'ASCII art moins fréquemment pour optimiser les performances
  if (frameCount % 1 === 0 && video.loadedmetadata) {
    video.loadPixels(); // Charger les pixels de la vidéo

    // Vérifier si les pixels sont disponibles
    if (video.pixels.length > 0) {
      let w = width / video.width; // Calculer la largeur d'une cellule
      let h = height / video.height; // Calculer la hauteur d'une cellule

      // Parcourir chaque pixel de la vidéo
      for (let i = 0; i < video.width; i++) {
        for (let j = 0; j < video.height; j++) {
          const pixelIndex = (i + j * video.width) * 4; // Calculer l'indice du pixel dans le tableau
          const r = video.pixels[pixelIndex + 0]; // Récupérer la composante rouge
          const g = video.pixels[pixelIndex + 1]; // Récupérer la composante verte
          const b = video.pixels[pixelIndex + 2]; // Récupérer la composante bleue
          const avg = (r + g + b) / 3; // Calculer la moyenne des composantes pour obtenir une valeur de gris

          noStroke(); // Désactiver les contours des formes
          fill(255); // Définir la couleur de remplissage en blanc

          const len = density.length; // Longueur de la chaîne de caractères de densité
          const charIndex = floor(map(avg, 0, 255, len - 1, 0)); // Mapper la valeur de gris à un indice de la chaîne
          const c = density.charAt(charIndex); // Récupérer le caractère correspondant

          textSize(w); // Définir la taille du texte pour chaque cellule
          textAlign(CENTER, CENTER); // Centrer le texte dans chaque cellule
          text(c, i * w + w * 0.5, j * h + h * 0.5); // Dessiner le caractère à la position correspondante
        }
      }
    }
  }

  frameCount++; // Incrémenter le compteur de frames
}
