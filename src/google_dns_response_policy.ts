import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDnsResponsePolicyArgsGkeClusters {
  gke_cluster_name: string;
}

export interface GoogleDnsResponsePolicyArgsNetworks {
  network_url: string;
}

export interface GoogleDnsResponsePolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDnsResponsePolicyArgs {
  description?: string;
  response_policy_name: string;
  gke_clusters?: GoogleDnsResponsePolicyArgsGkeClusters[];
  networks?: GoogleDnsResponsePolicyArgsNetworks[];
  timeouts?: GoogleDnsResponsePolicyArgsTimeouts;
}

export class google_dns_response_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDnsResponsePolicyArgs) {
    const meta = {gke_clusters:{isBlock:true},networks:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dns_response_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get response_policy_name(): string {
    return `${this.resourceType}.${this.resourceName}.response_policy_name`;
  }
}
