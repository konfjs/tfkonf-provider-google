import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapWebBackendServiceIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleIapWebBackendServiceIamMemberArgs {
  member: string;
  role: string;
  web_backend_service: string;
  condition?: GoogleIapWebBackendServiceIamMemberArgsCondition;
}

export class google_iap_web_backend_service_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleIapWebBackendServiceIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_iap_web_backend_service_iam_member", resourceName);
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }

  get web_backend_service(): string {
    return `${this.resourceType}.${this.resourceName}.web_backend_service`;
  }
}