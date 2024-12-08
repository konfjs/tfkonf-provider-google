import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeRegionCommitmentArgsLicenseResource {
  amount?: string;
  cores_per_license?: string;
  license: string;
}

export interface GoogleComputeRegionCommitmentArgsResources {
  accelerator_type?: string;
  amount?: string;
  type?: string;
}

export interface GoogleComputeRegionCommitmentArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeRegionCommitmentArgs {
  description?: string;
  name: string;
  plan: string;
  license_resource?: GoogleComputeRegionCommitmentArgsLicenseResource;
  resources?: GoogleComputeRegionCommitmentArgsResources[];
  timeouts?: GoogleComputeRegionCommitmentArgsTimeouts;
}

export class google_compute_region_commitment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeRegionCommitmentArgs) {
    const meta = {license_resource:{isBlock:true},resources:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_region_commitment", resourceName);
  }

  get auto_renew(): string {
    return `${this.resourceType}.${this.resourceName}.auto_renew`;
  }

  get category(): string {
    return `${this.resourceType}.${this.resourceName}.category`;
  }

  get commitment_id(): string {
    return `${this.resourceType}.${this.resourceName}.commitment_id`;
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get end_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.end_timestamp`;
  }

  get existing_reservations(): string {
    return `${this.resourceType}.${this.resourceName}.existing_reservations`;
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

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get start_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.start_timestamp`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get status_message(): string {
    return `${this.resourceType}.${this.resourceName}.status_message`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
