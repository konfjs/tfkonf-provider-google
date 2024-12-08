import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryBiReservationArgsPreferredTables {
  dataset_id?: string;
  project_id?: string;
  table_id?: string;
}

export interface GoogleBigqueryBiReservationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleBigqueryBiReservationArgs {
  location: string;
  size?: number;
  preferred_tables?: GoogleBigqueryBiReservationArgsPreferredTables[];
  timeouts?: GoogleBigqueryBiReservationArgsTimeouts;
}

export class google_bigquery_bi_reservation extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleBigqueryBiReservationArgs) {
    const meta = {preferred_tables:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_bigquery_bi_reservation", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
