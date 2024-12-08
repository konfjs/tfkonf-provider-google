import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeImageIamPolicyArgs {
  image: string;
}

export class data_google_compute_image_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleComputeImageIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_image_iam_policy", resourceName);
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get image(): string {
    return `data.${this.resourceType}.${this.resourceName}.image`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }
}
