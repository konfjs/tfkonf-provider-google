import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleCloudfunctions2FunctionIamPolicyArgs {
  cloud_function: string;
}

export class data_google_cloudfunctions2_function_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleCloudfunctions2FunctionIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_cloudfunctions2_function_iam_policy", resourceName);
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
