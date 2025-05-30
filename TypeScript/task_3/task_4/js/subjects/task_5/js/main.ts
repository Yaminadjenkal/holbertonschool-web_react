// Définition des interfaces avec une propriété "brand" pour les distinguer
interface MajorCredits {
    credits: number;
    _majorBrand: "MajorCredits"; // Identifiant unique pour MajorCredits
  }
  
  interface MinorCredits {
    credits: number;
    _minorBrand: "MinorCredits"; // Identifiant unique pour MinorCredits
  }
  
  // Fonction pour additionner les crédits des matières majeures
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return { credits: subject1.credits + subject2.credits, _majorBrand: "MajorCredits" };
  }
  
  // Fonction pour additionner les crédits des matières mineures
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return { credits: subject1.credits + subject2.credits, _minorBrand: "MinorCredits" };
  }
  
  // 🔹 Exemple d'utilisation
  const majorSubject1: MajorCredits = { credits: 4, _majorBrand: "MajorCredits" };
  const majorSubject2: MajorCredits = { credits: 3, _majorBrand: "MajorCredits" };
  const minorSubject1: MinorCredits = { credits: 2, _minorBrand: "MinorCredits" };
  const minorSubject2: MinorCredits = { credits: 1, _minorBrand: "MinorCredits" };
  
  const totalMajor = sumMajorCredits(majorSubject1, majorSubject2);
  const totalMinor = sumMinorCredits(minorSubject1, minorSubject2);
  
  console.log("Total Major Credits:", totalMajor); // { credits: 7, _majorBrand: "MajorCredits" }
  console.log("Total Minor Credits:", totalMinor); // { credits: 3, _minorBrand: "MinorCredits" }
  