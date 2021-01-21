import { Document } from './document';

export interface DocumentList {
    currentDocumentsCount: number;
    allDocumentsCount: number;
    documents: Document[]
}