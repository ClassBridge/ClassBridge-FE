export interface CreateReservationResponse {
  code: string;
  message: string;
  data: Data;
}

interface Data {
  reservationId: number;
  status: string;
  createdAt: string;
}
