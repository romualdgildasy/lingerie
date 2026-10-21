import { Injectable } from '@angular/core';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase.config';

@Injectable({ providedIn: 'root' })
export class StorageService {
  /**
   * Upload image produit vers Firebase Storage.
   * Si Blaze/Storage refuse → l'erreur remonte au formulaire (secours URL).
   */
  async uploadProductImage(file: File, folderId: string): Promise<string> {
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
    const path = `products/${folderId}/${Date.now()}_${safeName}`;
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, file);
    return getDownloadURL(storageRef);
  }
}