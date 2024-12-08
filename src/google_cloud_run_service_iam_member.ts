import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudRunServiceIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleCloudRunServiceIamMemberArgs {
  member: string;
  role: string;
  service: string;
  condition?: GoogleCloudRunServiceIamMemberArgsCondition;
}

export class google_cloud_run_service_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleCloudRunServiceIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_cloud_run_service_iam_member", resourceName);
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

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
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
