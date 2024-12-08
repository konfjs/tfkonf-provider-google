import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeReservationArgs {
  name: string;
  project?: string;
  zone: string;
}

export class data_google_compute_reservation extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleComputeReservationArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_reservation", resourceName);
  }

  get commitment(): string {
    return `data.${this.resourceType}.${this.resourceName}.commitment`;
  }

  get creation_timestamp(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get self_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_link`;
  }

  get share_settings(): string {
    return `data.${this.resourceType}.${this.resourceName}.share_settings`;
  }

  get specific_reservation(): string {
    return `data.${this.resourceType}.${this.resourceName}.specific_reservation`;
  }

  get specific_reservation_required(): string {
    return `data.${this.resourceType}.${this.resourceName}.specific_reservation_required`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.zone`;
  }
}
