
export class DataTableRequest {
  offset: number;
  limit: number;
  sortField: string;
  sortOrder: string;
  filter: string;

  constructor(limit: number, offset: number, sortField: string, sortOrder: string) {
    this.limit = limit;
    this.offset = offset;
    this.sortField = sortField;
    this.sortOrder = sortOrder;
  }

}

