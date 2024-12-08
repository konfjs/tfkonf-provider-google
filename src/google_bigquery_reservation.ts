import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryReservationArgsAutoscale {
  max_slots?: number;
}

export interface GoogleBigqueryReservationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleBigqueryReservationArgs {
  concurrency?: number;
  ignore_idle_slots?: boolean;
  location?: string;
  name: string;
  slot_capacity: number;
  autoscale?: GoogleBigqueryReservationArgsAutoscale;
  timeouts?: GoogleBigqueryReservationArgsTimeouts;
}

export class google_bigquery_reservation extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleBigqueryReservationArgs) {
    const meta = {autoscale:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_bigquery_reservation", resourceName);
  }

  get edition(): string {
    return `${this.resourceType}.${this.resourceName}.edition`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get slot_capacity(): string {
    return `${this.resourceType}.${this.resourceName}.slot_capacity`;
  }
}
