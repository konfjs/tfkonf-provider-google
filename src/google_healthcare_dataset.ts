import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleHealthcareDatasetArgsEncryptionSpec {
  kms_key_name?: string;
}

export interface GoogleHealthcareDatasetArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleHealthcareDatasetArgs {
  location: string;
  name: string;
  encryption_spec?: GoogleHealthcareDatasetArgsEncryptionSpec;
  timeouts?: GoogleHealthcareDatasetArgsTimeouts;
}

export class google_healthcare_dataset extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleHealthcareDatasetArgs) {
    const meta = {encryption_spec:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_healthcare_dataset", resourceName);
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

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get time_zone(): string {
    return `${this.resourceType}.${this.resourceName}.time_zone`;
  }
}
