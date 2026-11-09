/* ===== CONFIG SPEEDKECH : bddel hna ===== */
var SPEEDKECH = {
  whatsapp: "212770142096",   /* nmra dyal WhatsApp dyalek, b 212 w bla + w bla 0. Mital: 212661234567 */
  currency: "MAD",
  /* price: null  =  "prix à confirmer" (le client voit l'avertissement, le total ne le compte pas).
     Remplacez null par le vrai prix quand le restaurant vous donne son menu. */
  restaurants: [
    { id: "r1", name: "Chez Lamine Hadj Mustapha", area: "Jemaa el-Fna", menu: [
      { cat: "Spécialités", items: [
        { id: "a1", name: "Méchoui d’agneau (1/2 kg)", price: 90, desc: "Prix indicatif, à confirmer" },
        { id: "a2", name: "Méchoui d’agneau (1 kg)", price: 180, desc: "Prix indicatif, à confirmer" },
        { id: "a3", name: "Tangia marrakchia", price: null, desc: "Viande mijotée en pot d’argile" } ] },
      { cat: "Accompagnements", items: [
        { id: "a4", name: "Frites", price: 10, desc: "" },
        { id: "a5", name: "Eau (grande bouteille)", price: 10, desc: "" } ] } ] },
    { id: "r2", name: "Chez Lamine (Guéliz)", area: "Guéliz – Rue Ibn Aicha", menu: [
      { cat: "Spécialités", items: [
        { id: "b1", name: "Tangia", price: 100, desc: "Prix indicatif, à confirmer" },
        { id: "b2", name: "Méchoui d’agneau", price: null, desc: "Vendu au poids" },
        { id: "b3", name: "Grillades mixtes", price: null, desc: "" } ] } ] },
    { id: "r3", name: "Al Fassia", area: "Guéliz – Aguedal", menu: [
      { cat: "Cuisine marocaine", items: [
        { id: "c1", name: "Tajine", price: null, desc: "Choix à confirmer avec le restaurant" },
        { id: "c2", name: "Pastilla", price: null, desc: "" },
        { id: "c3", name: "Couscous", price: null, desc: "" } ] } ] },
    { id: "r4", name: "Henna Café", area: "Bab Doukkala", menu: [
      { cat: "Plats", items: [
        { id: "d1", name: "Burger", price: null, desc: "À partir de 70 MAD" },
        { id: "d2", name: "Bagel", price: null, desc: "À partir de 55 MAD" } ] } ] },
    { id: "r5", name: "La Famille", area: "Bab Mellah", menu: [
      { cat: "Végétarien", items: [
        { id: "e1", name: "Pâtes du jour", price: null, desc: "" },
        { id: "e2", name: "Salade du jour", price: null, desc: "" },
        { id: "e3", name: "Cheesecake ricotta framboise", price: null, desc: "" } ] } ] },
    { id: "r6", name: "McDonald’s", area: "Marrakech", menu: [
      { cat: "Burgers et sandwichs", items: [
        { id: "f1", name: "Big Mac", price: null, desc: "" },
        { id: "f2", name: "McChicken", price: null, desc: "" },
        { id: "f3", name: "Big Tasty", price: null, desc: "" },
        { id: "f4", name: "McArabia", price: null, desc: "" } ] },
      { cat: "Accompagnements", items: [
        { id: "f5", name: "Frites", price: null, desc: "" } ] } ] },
    { id: "r7", name: "KFC", area: "Marrakech", menu: [
      { cat: "Menus", items: [
        { id: "g1", name: "Zinger Box", price: null, desc: "" },
        { id: "g2", name: "Mighty Zinger Box", price: null, desc: "" },
        { id: "g3", name: "Menu Super Dîner", price: null, desc: "" },
        { id: "g4", name: "Light Meal (3 strips, frites, sauce)", price: null, desc: "" },
        { id: "g5", name: "Menu Enfant", price: null, desc: "Plat, frites, boisson" } ] },
      { cat: "À la carte", items: [
        { id: "g6", name: "Chicken Nuggets", price: null, desc: "" } ] } ] },
    { id: "r8", name: "Pizza Hut", area: "Marrakech", menu: [
      { cat: "Pizzas", items: [
        { id: "h1", name: "Pizza (choix à confirmer)", price: null, desc: "Précisez la pizza et la taille dans les notes" } ] } ] }
  ]
};