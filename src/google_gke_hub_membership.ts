import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleGkeHubMembershipArgsAuthority {
  issuer: string;
}

export interface GoogleGkeHubMembershipArgsEndpointGkeCluster {
  resource_link: string;
}

export interface GoogleGkeHubMembershipArgsEndpoint {
  gke_cluster?: GoogleGkeHubMembershipArgsEndpointGkeCluster;
}

export interface GoogleGkeHubMembershipArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleGkeHubMembershipArgs {
  labels?: { [key: string]: string };
  location?: string;
  membership_id: string;
  authority?: GoogleGkeHubMembershipArgsAuthority;
  endpoint?: GoogleGkeHubMembershipArgsEndpoint;
  timeouts?: GoogleGkeHubMembershipArgsTimeouts;
}

export class google_gke_hub_membership extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleGkeHubMembershipArgs) {
    const meta = {authority:{isBlock:true},endpoint:{isBlock:true,gke_cluster:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_gke_hub_membership", resourceName);
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get membership_id(): string {
    return `${this.resourceType}.${this.resourceName}.membership_id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
