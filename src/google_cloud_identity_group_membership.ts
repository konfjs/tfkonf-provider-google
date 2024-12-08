import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudIdentityGroupMembershipArgsPreferredMemberKey {
  id: string;
  namespace?: string;
}

export interface GoogleCloudIdentityGroupMembershipArgsRolesExpiryDetail {
  expire_time: string;
}

export interface GoogleCloudIdentityGroupMembershipArgsRoles {
  name: string;
  expiry_detail?: GoogleCloudIdentityGroupMembershipArgsRolesExpiryDetail;
}

export interface GoogleCloudIdentityGroupMembershipArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleCloudIdentityGroupMembershipArgs {
  group: string;
  preferred_member_key?: GoogleCloudIdentityGroupMembershipArgsPreferredMemberKey;
  roles: GoogleCloudIdentityGroupMembershipArgsRoles[];
  timeouts?: GoogleCloudIdentityGroupMembershipArgsTimeouts;
}

export class google_cloud_identity_group_membership extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleCloudIdentityGroupMembershipArgs) {
    const meta = {preferred_member_key:{isBlock:true},roles:{isBlock:true,expiry_detail:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_cloud_identity_group_membership", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get group(): string {
    return `${this.resourceType}.${this.resourceName}.group`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
