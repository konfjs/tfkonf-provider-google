import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudRunV2JobIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleCloudRunV2JobIamBindingArgs {
  members: string[];
  name: string;
  role: string;
  condition?: GoogleCloudRunV2JobIamBindingArgsCondition;
}

export class google_cloud_run_v2_job_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleCloudRunV2JobIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_cloud_run_v2_job_iam_binding", resourceName);
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

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
