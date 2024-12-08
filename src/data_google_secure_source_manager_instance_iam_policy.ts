import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleSecureSourceManagerInstanceIamPolicyArgs {
  instance_id: string;
}

export class data_google_secure_source_manager_instance_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleSecureSourceManagerInstanceIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_secure_source_manager_instance_iam_policy", resourceName);
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }
}