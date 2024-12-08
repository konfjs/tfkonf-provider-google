import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeSubnetworkArgsLogConfig {
  aggregation_interval?: string;
  filter_expr?: string;
  flow_sampling?: number;
  metadata?: string;
  metadata_fields?: string[];
}

export interface GoogleComputeSubnetworkArgsSecondaryIpRange {
  range_name: string;
  reserved_internal_range?: string;
}

export interface GoogleComputeSubnetworkArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeSubnetworkArgs {
  description?: string;
  ipv6_access_type?: string;
  name: string;
  network: string;
  reserved_internal_range?: string;
  role?: string;
  send_secondary_ip_range_if_empty?: boolean;
  log_config?: GoogleComputeSubnetworkArgsLogConfig;
  secondary_ip_range?: GoogleComputeSubnetworkArgsSecondaryIpRange[];
  timeouts?: GoogleComputeSubnetworkArgsTimeouts;
}

export class google_compute_subnetwork extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeSubnetworkArgs) {
    const meta = {log_config:{isBlock:true},secondary_ip_range:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_subnetwork", resourceName);
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get external_ipv6_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.external_ipv6_prefix`;
  }

  get fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.fingerprint`;
  }

  get gateway_address(): string {
    return `${this.resourceType}.${this.resourceName}.gateway_address`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get internal_ipv6_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.internal_ipv6_prefix`;
  }

  get ip_cidr_range(): string {
    return `${this.resourceType}.${this.resourceName}.ip_cidr_range`;
  }

  get ipv6_cidr_range(): string {
    return `${this.resourceType}.${this.resourceName}.ipv6_cidr_range`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get network(): string {
    return `${this.resourceType}.${this.resourceName}.network`;
  }

  get private_ip_google_access(): string {
    return `${this.resourceType}.${this.resourceName}.private_ip_google_access`;
  }

  get private_ipv6_google_access(): string {
    return `${this.resourceType}.${this.resourceName}.private_ipv6_google_access`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get purpose(): string {
    return `${this.resourceType}.${this.resourceName}.purpose`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get stack_type(): string {
    return `${this.resourceType}.${this.resourceName}.stack_type`;
  }
}
