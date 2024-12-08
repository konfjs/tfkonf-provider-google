import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleProjectOrganizationPolicyArgsBooleanPolicy {
  enforced: boolean;
}

export interface GoogleProjectOrganizationPolicyArgsListPolicyAllow {
  all?: boolean;
  values?: string[];
}

export interface GoogleProjectOrganizationPolicyArgsListPolicyDeny {
  all?: boolean;
  values?: string[];
}

export interface GoogleProjectOrganizationPolicyArgsListPolicy {
  inherit_from_parent?: boolean;
  allow?: GoogleProjectOrganizationPolicyArgsListPolicyAllow;
  deny?: GoogleProjectOrganizationPolicyArgsListPolicyDeny;
}

export interface GoogleProjectOrganizationPolicyArgsRestorePolicy {
  default: boolean;
}

export interface GoogleProjectOrganizationPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}

export interface GoogleProjectOrganizationPolicyArgs {
  constraint: string;
  project: string;
  boolean_policy?: GoogleProjectOrganizationPolicyArgsBooleanPolicy;
  list_policy?: GoogleProjectOrganizationPolicyArgsListPolicy;
  restore_policy?: GoogleProjectOrganizationPolicyArgsRestorePolicy;
  timeouts?: GoogleProjectOrganizationPolicyArgsTimeouts;
}

export class google_project_organization_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleProjectOrganizationPolicyArgs) {
    const meta = {boolean_policy:{isBlock:true},list_policy:{isBlock:true,allow:{isBlock:true},deny:{isBlock:true}},restore_policy:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_project_organization_policy", resourceName);
  }

  get constraint(): string {
    return `${this.resourceType}.${this.resourceName}.constraint`;
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

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
