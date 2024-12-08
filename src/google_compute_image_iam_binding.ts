import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeImageIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleComputeImageIamBindingArgs {
  image: string;
  members: string[];
  role: string;
  condition?: GoogleComputeImageIamBindingArgsCondition;
}

export class google_compute_image_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeImageIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_image_iam_binding", resourceName);
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

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
