


const BASE_URL = 'http://localhost:1337';

export async function fetchPrestations() : Promise<{data : PrestationType[]}> {
  const res = await fetch(`${BASE_URL}/api/prestations`);
  if (!res.ok) throw new Error("Erreur lors du chargement des prestations");
  const data = await res.json();
  return data;
}

export async function fetchPresentation() : Promise<{data : PresentationType[]}> {
  const res = await fetch(`${BASE_URL}/api/presentations`);
  if (!res.ok) throw new Error("Erreur lors du chargement de la presentation");
  return res.json();
}

export type PrestationType = {

    nom: string;
    contenu: string;
    order : number;

};

export type PresentationType = {
    contenu: string;
};
