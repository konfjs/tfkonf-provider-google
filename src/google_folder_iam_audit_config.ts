import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleFolderIamAuditConfigArgsAuditLogConfig {
  exempted_members?: string[];
  log_type: string;
}

export interface GoogleFolderIamAuditConfigArgs {
  folder: string;
  service: string;
  audit_log_config: GoogleFolderIamAuditConfigArgsAuditLogConfig[];
}

export class google_folder_iam_audit_config extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleFolderIamAuditConfigArgs) {
    const meta = {audit_log_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_folder_iam_audit_config", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get folder(): string {
    return `${this.resourceType}.${this.resourceName}.folder`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get service(): string {
    return `${this.resourceType}.${this.resourceName}.service`;
  }
}
