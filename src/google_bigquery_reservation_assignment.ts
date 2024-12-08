import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryReservationAssignmentArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleBigqueryReservationAssignmentArgs {
  assignee: string;
  job_type: string;
  reservation: string;
  timeouts?: GoogleBigqueryReservationAssignmentArgsTimeouts;
}

export class google_bigquery_reservation_assignment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleBigqueryReservationAssignmentArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_bigquery_reservation_assignment", resourceName);
  }

  get assignee(): string {
    return `${this.resourceType}.${this.resourceName}.assignee`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get job_type(): string {
    return `${this.resourceType}.${this.resourceName}.job_type`;
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

  get reservation(): string {
    return `${this.resourceType}.${this.resourceName}.reservation`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }
}
