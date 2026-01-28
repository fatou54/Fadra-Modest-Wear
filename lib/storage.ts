import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from './firebase';

// Upload product image
export const uploadProductImage = async (file: File, productId: string) => {
  try {
    const storageRef = ref(storage, `products/${productId}/${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return { success: true, url: downloadURL };
  } catch (error) {
    console.error('Error uploading image:', error);
    return { success: false, error };
  }
};

// Upload multiple images
export const uploadMultipleImages = async (files: File[], productId: string) => {
  try {
    const uploadPromises = files.map(file => uploadProductImage(file, productId));
    const results = await Promise.all(uploadPromises);
    const urls = results.filter(r => r.success).map(r => r.url);
    return { success: true, urls };
  } catch (error) {
    console.error('Error uploading images:', error);
    return { success: false, error };
  }
};

// Delete image
export const deleteImage = async (imageUrl: string) => {
  try {
    const imageRef = ref(storage, imageUrl);
    await deleteObject(imageRef);
    return { success: true };
  } catch (error) {
    console.error('Error deleting image:', error);
    return { success: false, error };
  }
};
