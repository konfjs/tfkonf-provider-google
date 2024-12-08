import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleKmsKeyRingArgs {
  location: string;
  name: string;
  project?: string;
}

export class data_google_kms_key_ring extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleKmsKeyRingArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_kms_key_ring", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }
}
