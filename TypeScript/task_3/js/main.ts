/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

// Crée un nouvel utilisateur
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insère un nouvel utilisateur et récupère son ID
const newRowID: RowID = CRUD.insertRow(row);

// Mise à jour du même utilisateur avec un âge
const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);

// Suppression de l'utilisateur
CRUD.deleteRow(newRowID);

