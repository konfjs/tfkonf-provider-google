import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleEndpointsServiceIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleEndpointsServiceIamMemberArgs {
  member: string;
  role: string;
  service_name: string;
  condition?: GoogleEndpointsServiceIamMemberArgsCondition;
}

export class google_endpoints_service_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleEndpointsServiceIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_endpoints_service_iam_member", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }

  get service_name(): string {
    return `${this.resourceType}.${this.resourceName}.service_name`;
  }
}
