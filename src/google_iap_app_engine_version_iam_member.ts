import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapAppEngineVersionIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleIapAppEngineVersionIamMemberArgs {
  app_id: string;
  member: string;
  role: string;
  service: string;
  version_id: string;
  condition?: GoogleIapAppEngineVersionIamMemberArgsCondition;
}

export class google_iap_app_engine_version_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleIapAppEngineVersionIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_iap_app_engine_version_iam_member", resourceName);
  }

  get app_id(): string {
    return `${this.resourceType}.${this.resourceName}.app_id`;
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

  get service(): string {
    return `${this.resourceType}.${this.resourceName}.service`;
  }

  get version_id(): string {
    return `${this.resourceType}.${this.resourceName}.version_id`;
  }
}
