import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleCloudfunctionsFunctionIamPolicyArgs {
  cloud_function: string;
}

export class data_google_cloudfunctions_function_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleCloudfunctionsFunctionIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_cloudfunctions_function_iam_policy", resourceName);
  }

  get cloud_function(): string {
    return `data.${this.resourceType}.${this.resourceName}.cloud_function`;
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `data.${this.resourceType}.${this.resourceName}.region`;
  }
}
