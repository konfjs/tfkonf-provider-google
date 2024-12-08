import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleFolderOrganizationPolicyArgsBooleanPolicy {
  enforced: boolean;
}

export interface GoogleFolderOrganizationPolicyArgsListPolicyAllow {
  all?: boolean;
  values?: string[];
}

export interface GoogleFolderOrganizationPolicyArgsListPolicyDeny {
  all?: boolean;
  values?: string[];
}

export interface GoogleFolderOrganizationPolicyArgsListPolicy {
  inherit_from_parent?: boolean;
  allow?: GoogleFolderOrganizationPolicyArgsListPolicyAllow;
  deny?: GoogleFolderOrganizationPolicyArgsListPolicyDeny;
}

export interface GoogleFolderOrganizationPolicyArgsRestorePolicy {
  default: boolean;
}

export interface GoogleFolderOrganizationPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}

export interface GoogleFolderOrganizationPolicyArgs {
  constraint: string;
  folder: string;
  boolean_policy?: GoogleFolderOrganizationPolicyArgsBooleanPolicy;
  list_policy?: GoogleFolderOrganizationPolicyArgsListPolicy;
  restore_policy?: GoogleFolderOrganizationPolicyArgsRestorePolicy;
  timeouts?: GoogleFolderOrganizationPolicyArgsTimeouts;
}

export class google_folder_organization_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleFolderOrganizationPolicyArgs) {
    const meta = {boolean_policy:{isBlock:true},list_policy:{isBlock:true,allow:{isBlock:true},deny:{isBlock:true}},restore_policy:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_folder_organization_policy", resourceName);
  }

  get constraint(): string {
    return `${this.resourceType}.${this.resourceName}.constraint`;
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

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
