import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleNetblockIpRangesArgs {
  range_type?: string;
}

export class data_google_netblock_ip_ranges extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleNetblockIpRangesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_netblock_ip_ranges", resourceName);
  }

  get cidr_blocks(): string {
    return `data.${this.resourceType}.${this.resourceName}.cidr_blocks`;
  }

  get cidr_blocks_ipv4(): string {
    return `data.${this.resourceType}.${this.resourceName}.cidr_blocks_ipv4`;
  }

  get cidr_blocks_ipv6(): string {
    return `data.${this.resourceType}.${this.resourceName}.cidr_blocks_ipv6`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
