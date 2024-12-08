import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleProjectIamAuditConfigArgsAuditLogConfig {
  exempted_members?: string[];
  log_type: string;
}

export interface GoogleProjectIamAuditConfigArgs {
  project: string;
  service: string;
  audit_log_config: GoogleProjectIamAuditConfigArgsAuditLogConfig[];
}

export class google_project_iam_audit_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleProjectIamAuditConfigArgs) {
    const meta = {audit_log_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_project_iam_audit_config", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get service(): string {
    return `${this.resourceType}.${this.resourceName}.service`;
  }
}
