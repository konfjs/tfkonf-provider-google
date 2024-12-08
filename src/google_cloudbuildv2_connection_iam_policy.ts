import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudbuildv2ConnectionIamPolicyArgs {
  name: string;
  policy_data: string;
}

export class google_cloudbuildv2_connection_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleCloudbuildv2ConnectionIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_cloudbuildv2_connection_iam_policy", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
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

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}