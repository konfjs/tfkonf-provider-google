import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleCloudRunServiceIamPolicyArgs {
  service: string;
}

export class data_google_cloud_run_service_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleCloudRunServiceIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_cloud_run_service_iam_policy", resourceName);
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

  get service(): string {
    return `data.${this.resourceType}.${this.resourceName}.service`;
  }
}
