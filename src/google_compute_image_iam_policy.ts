import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeImageIamPolicyArgs {
  image: string;
  policy_data: string;
}

export class google_compute_image_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeImageIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_compute_image_iam_policy", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get image(): string {
    return `${this.resourceType}.${this.resourceName}.image`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
