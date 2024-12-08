import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleKmsKeyRingsArgs {
  filter?: string;
  location: string;
  project?: string;
}

export class data_google_kms_key_rings extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleKmsKeyRingsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_kms_key_rings", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get key_rings(): string {
    return `data.${this.resourceType}.${this.resourceName}.key_rings`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }
}
