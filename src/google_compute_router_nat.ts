import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeRouterNatArgsLogConfig {
  enable: boolean;
  filter: string;
}

export interface GoogleComputeRouterNatArgsRulesAction {
  source_nat_active_ips?: string[];
  source_nat_drain_ips?: string[];
}

export interface GoogleComputeRouterNatArgsRules {
  description?: string;
  match: string;
  rule_number: number;
  action?: GoogleComputeRouterNatArgsRulesAction;
}

export interface GoogleComputeRouterNatArgsSubnetwork {
  name: string;
  secondary_ip_range_names?: string[];
  source_ip_ranges_to_nat: string[];
}

export interface GoogleComputeRouterNatArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeRouterNatArgs {
  icmp_idle_timeout_sec?: number;
  initial_nat_ips?: string[];
  max_ports_per_vm?: number;
  name: string;
  nat_ip_allocate_option?: string;
  router: string;
  source_subnetwork_ip_ranges_to_nat: string;
  tcp_established_idle_timeout_sec?: number;
  tcp_time_wait_timeout_sec?: number;
  tcp_transitory_idle_timeout_sec?: number;
  udp_idle_timeout_sec?: number;
  log_config?: GoogleComputeRouterNatArgsLogConfig;
  rules?: GoogleComputeRouterNatArgsRules[];
  subnetwork?: GoogleComputeRouterNatArgsSubnetwork[];
  timeouts?: GoogleComputeRouterNatArgsTimeouts;
}

export class google_compute_router_nat extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeRouterNatArgs) {
    const meta = {log_config:{isBlock:true},rules:{isBlock:true,action:{isBlock:true}},subnetwork:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_router_nat", resourceName);
  }

  get auto_network_tier(): string {
    return `${this.resourceType}.${this.resourceName}.auto_network_tier`;
  }

  get drain_nat_ips(): string {
    return `${this.resourceType}.${this.resourceName}.drain_nat_ips`;
  }

  get enable_dynamic_port_allocation(): string {
    return `${this.resourceType}.${this.resourceName}.enable_dynamic_port_allocation`;
  }

  get enable_endpoint_independent_mapping(): string {
    return `${this.resourceType}.${this.resourceName}.enable_endpoint_independent_mapping`;
  }

  get endpoint_types(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint_types`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get min_ports_per_vm(): string {
    return `${this.resourceType}.${this.resourceName}.min_ports_per_vm`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get nat_ips(): string {
    return `${this.resourceType}.${this.resourceName}.nat_ips`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get router(): string {
    return `${this.resourceType}.${this.resourceName}.router`;
  }

  get source_subnetwork_ip_ranges_to_nat(): string {
    return `${this.resourceType}.${this.resourceName}.source_subnetwork_ip_ranges_to_nat`;
  }
}
