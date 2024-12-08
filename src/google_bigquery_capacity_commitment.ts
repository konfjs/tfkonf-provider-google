import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryCapacityCommitmentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleBigqueryCapacityCommitmentArgs {
  capacity_commitment_id?: string;
  edition?: string;
  enforce_single_admin_project_per_org?: string;
  location?: string;
  plan: string;
  renewal_plan?: string;
  slot_count: number;
  timeouts?: GoogleBigqueryCapacityCommitmentArgsTimeouts;
}

export class google_bigquery_capacity_commitment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleBigqueryCapacityCommitmentArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_bigquery_capacity_commitment", resourceName);
  }

  get commitment_end_time(): string {
    return `${this.resourceType}.${this.resourceName}.commitment_end_time`;
  }

  get commitment_start_time(): string {
    return `${this.resourceType}.${this.resourceName}.commitment_start_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get plan(): string {
    return `${this.resourceType}.${this.resourceName}.plan`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get slot_count(): string {
    return `${this.resourceType}.${this.resourceName}.slot_count`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }
}
