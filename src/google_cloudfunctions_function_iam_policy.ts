import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudfunctionsFunctionIamPolicyArgs {
  cloud_function: string;
  policy_data: string;
}

export class google_cloudfunctions_function_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleCloudfunctionsFunctionIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_cloudfunctions_function_iam_policy", resourceName);
  }

  get cloud_function(): string {
    return `${this.resourceType}.${this.resourceName}.cloud_function`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }
}
