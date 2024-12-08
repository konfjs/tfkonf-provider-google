import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudRunServiceIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleCloudRunServiceIamBindingArgs {
  members: string[];
  role: string;
  service: string;
  condition?: GoogleCloudRunServiceIamBindingArgsCondition;
}

export class google_cloud_run_service_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleCloudRunServiceIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_cloud_run_service_iam_binding", resourceName);
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }

  get service(): string {
    return `${this.resourceType}.${this.resourceName}.service`;
  }
}
