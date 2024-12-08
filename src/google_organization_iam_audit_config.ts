import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleOrganizationIamAuditConfigArgsAuditLogConfig {
  exempted_members?: string[];
  log_type: string;
}

export interface GoogleOrganizationIamAuditConfigArgs {
  org_id: string;
  service: string;
  audit_log_config: GoogleOrganizationIamAuditConfigArgsAuditLogConfig[];
}

export class google_organization_iam_audit_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleOrganizationIamAuditConfigArgs) {
    const meta = {audit_log_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_organization_iam_audit_config", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get org_id(): string {
    return `${this.resourceType}.${this.resourceName}.org_id`;
  }

  get service(): string {
    return `${this.resourceType}.${this.resourceName}.service`;
  }
}
