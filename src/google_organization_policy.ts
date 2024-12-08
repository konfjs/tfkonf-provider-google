import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleOrganizationPolicyArgsBooleanPolicy {
  enforced: boolean;
}

export interface GoogleOrganizationPolicyArgsListPolicyAllow {
  all?: boolean;
  values?: string[];
}

export interface GoogleOrganizationPolicyArgsListPolicyDeny {
  all?: boolean;
  values?: string[];
}

export interface GoogleOrganizationPolicyArgsListPolicy {
  inherit_from_parent?: boolean;
  allow?: GoogleOrganizationPolicyArgsListPolicyAllow;
  deny?: GoogleOrganizationPolicyArgsListPolicyDeny;
}

export interface GoogleOrganizationPolicyArgsRestorePolicy {
  default: boolean;
}

export interface GoogleOrganizationPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}

export interface GoogleOrganizationPolicyArgs {
  constraint: string;
  org_id: string;
  boolean_policy?: GoogleOrganizationPolicyArgsBooleanPolicy;
  list_policy?: GoogleOrganizationPolicyArgsListPolicy;
  restore_policy?: GoogleOrganizationPolicyArgsRestorePolicy;
  timeouts?: GoogleOrganizationPolicyArgsTimeouts;
}

export class google_organization_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleOrganizationPolicyArgs) {
    const meta = {boolean_policy:{isBlock:true},list_policy:{isBlock:true,allow:{isBlock:true},deny:{isBlock:true}},restore_policy:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_organization_policy", resourceName);
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

  get org_id(): string {
    return `${this.resourceType}.${this.resourceName}.org_id`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
