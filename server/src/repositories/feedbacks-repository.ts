export interface  FeedbackCreateData {
    type: string;
    comment: string;
    screenshot?: string;
}

export interface FeedbacksRepository {
    
    // quais metodos existem dentro

    create: ( data: FeedbackCreateData) => Promise<void>;
}